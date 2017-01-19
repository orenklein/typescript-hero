import { ExtensionContext } from 'vscode';
import { ServerOptions, TransportKind, LanguageClientOptions, LanguageClient } from 'vscode-languageclient';

/**
 * TODO
 * 
 * @export
 * @param {ExtensionContext} context
 * @returns {Promise<LanguageClient>}
 */
export async function createServerConnection(context: ExtensionContext): Promise<LanguageClient> {
    let module = require.resolve('typescript-hero-server'),
        options = { execArgv: ['--nolazy', '--debug=6004'] };

    let serverOptions: ServerOptions = {
        run: { module, transport: TransportKind.ipc },
        debug: { module, transport: TransportKind.ipc, options }
    };

    let clientOptions: LanguageClientOptions = {
        documentSelector: ['typescript', 'typescriptreact'],
        synchronize: {
            configurationSection: 'typescriptHero'
        }
    };

    let client = new LanguageClient(
        'typescriptHeroServer', 'TypeScript Hero Server', serverOptions, clientOptions
    );

    context.subscriptions.push(client.start());
    debugger;
    await client.onReady();
    return client;
}
