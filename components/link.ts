class Link {
    id: string;
    text: string;
    href: string;
    highlighted: boolean;

    constructor(text: string, href: string, highlighted: boolean) {
        this.text = text;
        this.id = new Date().toISOString();
        this.href = href
        this.highlighted = highlighted
    }
}

export default Link;