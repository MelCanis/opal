import { v4 as uuid } from 'uuid';

export class Realm {
    id = uuid();
    title = 'New Realm';
    icon = null;
}
export class Item {
    id = uuid();
    tags = [];
    attributes = [];
    template = [];
    constructor (realm, parent, title, icon, content) {
        this.realm = realm;
        this.parent = parent;
        this.title = title;
        this.icon = icon;
        this.content = content;
    }
}
export class Attribute {
    constructor (type = "text", title = "", content = "") {
        this.type = type;
        this.title = title;
        this.content = content;
    }
}