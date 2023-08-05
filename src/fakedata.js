class Realm {
    constructor (title, id, icon) {
        this.title = title;
        this.id = id;
        this.icon = icon;
    }
}

class Item {
    tags = [];
    attributes = [];
    constructor (title, id, content, icon, children) {
        this.title = title;
        this.id = id;
        this.content = content;
        this.icon = icon;
        this.children = children;
    }
} 

let realms = [
    new Realm("Work", "1", "https://images6.alphacoders.com/736/736068.png"),
    new Realm("Stuff", "2", "https://e1.pxfuel.com/desktop-wallpaper/410/645/desktop-wallpaper-clarence-2-cartoon-network-clarence.jpg"),
    new Realm("Thoughts", "3", "https://wallpapercave.com/wp/wp2041476.jpg"),
]

let items = [
    new Item("Idea 1", "2", "I want to do something!"),
    new Item("", "", "", "https://opalbasic.netlify.app/assets/opal-96-444bf01b.png"),
    new Item("Plans for Trip", "2", "1. Go Somewhere!\n2. Have Fun There!\n3. Go Somewhere Else!\n4. Repeat!", "https://opalbasic.netlify.app/assets/opal-96-444bf01b.png"),
    new Item("Fun Games on The Internet", "2", "+ Monument Valley\n+ Naruto\n+ Nintendo Wii Sports"),
    new Item("Quote", "5", "This was a very fun adventure. I'd go again..."),
    new Item("Things 2", "", "", "https://opalbasic.netlify.app/assets/opal-96-444bf01b.png", ["日本のまつり", "Fun Games", "Different Types of Gyoza", "Animes Popular in Japan", "人気な動画"]),
    new Item("Ways to Cook a Meal", "", "", "https://opalbasic.netlify.app/assets/opal-96-444bf01b.png"),
    new Item("","", "What's something fun to do?", ""),
];

export { realms, items };