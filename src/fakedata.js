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
    constructor (title, id, content, icon) {
        this.title = title;
        this.id = id;
        this.content = content;
        this.icon = icon;
    }
} 

let realms = [
    new Realm("Work", "1", "https://media-private.canva.com/Q1zsM/MAFPGFQ1zsM/1/s2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230621T104247Z&X-Amz-Expires=17324&X-Amz-Signature=6d2c7e4f074d9e25e7c85d208a0f66e01b1390c267ad019ca1de2ad4b3027ce7&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2015%3A31%3A31%20GMT"),
    new Realm("Stuff", "2", "https://media-private.canva.com/XhvXw/MAFPGPXhvXw/1/s2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230621T023726Z&X-Amz-Expires=47372&X-Amz-Signature=bb493873afa689e1fc31b8560688e023b545601e1359cf4a1e62327d4064530c&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2015%3A46%3A58%20GMT"),
    new Realm("Thoughts", "3", "https://media-private.canva.com/AfRp4/MAFPGBAfRp4/1/s2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230620T195651Z&X-Amz-Expires=70968&X-Amz-Signature=fcc915ed1e44bad8ce0104718faeae4e5c3030c7a26dc3a5aaaf23f24ea3705a&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2015%3A39%3A39%20GMT"),
]

let items = [
    new Item("Idea 1", "2", "I want to do something!"),
    new Item("", "", "", "https://media-private.canva.com/Ll5QY/MAFkEwLl5QY/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230621T040338Z&X-Amz-Expires=46190&X-Amz-Signature=0d9b3cdab34d0ce869cccb3454000e45ccfc1c5aab5abe6291013ea767bf2c79&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2016%3A53%3A28%20GMT"),
    new Item("Plans for Trip", "2", "1. Go Somewhere!\n2.Have Fun There!\n3.Go Somewhere Else!\n4. Repeat!", "https://media-private.canva.com/Ll5QY/MAFkEwLl5QY/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230621T040338Z&X-Amz-Expires=46190&X-Amz-Signature=0d9b3cdab34d0ce869cccb3454000e45ccfc1c5aab5abe6291013ea767bf2c79&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2016%3A53%3A28%20GMT"),
    new Item("Fun Games on The Internet", "2", "+ Monument Valley\n+ Naruto\n+ Nintendo Wii Sports"),
    new Item("Quote", "5", "This was a very fun adventure. I'd go again..."),
    new Item("Ways to Cook a Meal", "", "", "https://media-private.canva.com/Ll5QY/MAFkEwLl5QY/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230621T040338Z&X-Amz-Expires=46190&X-Amz-Signature=0d9b3cdab34d0ce869cccb3454000e45ccfc1c5aab5abe6291013ea767bf2c79&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2016%3A53%3A28%20GMT"),
];

export { realms, items };