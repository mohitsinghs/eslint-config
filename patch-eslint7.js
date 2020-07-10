const path = require('path')

let currentModule = module
while (
  !/[\\/]eslint[\\/]lib[\\/]cli-engine[\\/]config-array-factory\.js/i.test(
    currentModule.filename
  )
) {
  if (!currentModule.parent) {
    // This was tested with ESLint 6.1.0; other versions may not work
    throw new Error(
      'Failed to patch ESLint because the calling module was not recognized'
    )
  }
  currentModule = currentModule.parent
}
const eslintFolder = path.join(path.dirname(currentModule.filename), '../..')

const configArrayFactoryPath = path.join(
  eslintFolder,
  'lib/cli-engine/config-array-factory'
)
const ConfigArrayFactory = require(configArrayFactoryPath).ConfigArrayFactory

function isFilePath(nameOrPath) {
  return /^\.{1,2}[/\\]/u.test(nameOrPath) || path.isAbsolute(nameOrPath)
}

function configMissingError(configName, importerName) {
  return Object.assign(
    new Error(`Failed to load config "${configName}" to extend from.`),
    {
      messageTemplate: 'extend-config-missing',
      messageData: { configName, importerName },
    }
  )
}

if (!ConfigArrayFactory.__patched) {
  ConfigArrayFactory.__patched = true
  ConfigArrayFactory.prototype._loadPlugins = function (names, ctx) {
    if (path.dirname(ctx.filePath) !== ctx.pluginBasePath) {
      ctx.pluginBasePath = path.join(path.dirname(ctx.filePath), '../..')
    }
    return names.reduce((map, name) => {
      if (isFilePath(name)) {
        throw new Error('Plugins array cannot includes file paths.')
      }
      const plugin = this._loadPlugin(name, ctx)

      map[plugin.id] = plugin

      return map
    }, {})
  }
  ConfigArrayFactory.prototype._loadExtendedPluginConfig = function (
    extendName,
    ctx
  ) {
    const slashIndex = extendName.lastIndexOf('/')
    const pluginName = extendName.slice('plugin:'.length, slashIndex)
    const configName = extendName.slice(slashIndex + 1)

    if (isFilePath(pluginName)) {
      throw new Error("'extends' cannot use a file path for plugins.")
    }

    ctx.pluginBasePath = path.dirname(ctx.filePath)
    const plugin = this._loadPlugin(pluginName, ctx)
    const configData =
      plugin.definition && plugin.definition.configs[configName]

    if (configData) {
      return this._normalizeConfigData(configData, {
        ...ctx,
        filePath: plugin.filePath || ctx.filePath,
        name: `${ctx.name} » plugin:${plugin.id}/${configName}`,
      })
    }

    throw plugin.error || configMissingError(extendName, ctx.filePath)
  }
}

