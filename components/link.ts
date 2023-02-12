class Link {
  id: string;
  text: string;
  href: string;
  background: boolean;

  constructor(text: string, href: string, background: boolean) {
    this.text = text;
    this.id = new Date().toISOString();
    this.href = href;
    this.background = background;
  }
}

export default Link;
