import { DeclarationInfo } from '../';
import { PickableItem } from './PickableItem';

/**
 * Quickpick item that contains a symbol resolve information (Declarationinfo)
 * Contains the name and the location where it is imported from.
 * The whole DeclarationInfo is also exposed.
 * 
 * @export
 * @class ResolveQuickPickItem
 * @implements {QuickPickItem}
 */
export class ResolveQuickPickItem implements PickableItem {
    public label: string;
    public description: string;

    constructor(public readonly declarationInfo: DeclarationInfo) {
        this.description = this.declarationInfo.from;
        this.label = this.declarationInfo.declaration.name;
    }
}
