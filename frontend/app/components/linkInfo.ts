class LinkInfo {
  id: string;
  text: string;
  href: string;
  classNames: string;
  background: boolean;

  constructor(text: string, href: string, background: boolean, classNames:string = "") {
    this.text = text;
    this.id = new Date().toISOString();
    this.href = href;
    this.background = background;
    this.classNames = classNames
  }
}

export default LinkInfo;
