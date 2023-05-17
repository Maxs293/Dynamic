export default function init(self: any) {
    if (self.Document) self.__dynamic.elements = {
        attributes: ['src', 'href', 'srcset', 'action', 'data', 'integrity', 'nonce', 'imagesrcset'],
        iframeSrc: Object.getOwnPropertyDescriptor(self.HTMLIFrameElement.prototype, 'src'),
        contentWindow: Object.getOwnPropertyDescriptor(self.HTMLIFrameElement.prototype, 'contentWindow'),
        innerHTML: Object.getOwnPropertyDescriptor(self.Element.prototype, 'innerHTML'),
        outerHTML: Object.getOwnPropertyDescriptor(self.Element.prototype, 'outerHTML'),

        config: [
            {
                "elements": [self.HTMLScriptElement, self.HTMLIFrameElement, self.HTMLEmbedElement, self.HTMLInputElement, self.HTMLTrackElement, self.HTMLMediaElement,self.HTMLSourceElement, self.Image, self.HTMLImageElement],
                "tags": ['src'],
                "action": "url"
            },
            {
                "elements": [self.HTMLSourceElement, self.HTMLImageElement],
                "tags": ['srcset'],
                "action": "srcset"
            },
            {
                "elements": [self.HTMLAnchorElement, self.HTMLLinkElement, self.HTMLAreaElement],
                "tags": ['href'],
                "action": "url"
            },
            {
                "elements": [self.HTMLIFrameElement],
                "tags": ['contentWindow'],
                "action": "window"
            },
            {
                "elements": [self.HTMLIFrameElement],
                "tags": ['contentDocument'],
                "action": "window"
            },
            {
                "elements": [self.HTMLFormElement],
                "tags": ['action'],
                "action": "url"
            }, 
            {
                "elements": [self.HTMLObjectElement],
                "tags": ['data'],
                "action": "url",
            },
            {
                "elements": [self.HTMLScriptElement, self.HTMLLinkElement],
                "tags": ['integrity'],
                "action": "rewrite",
                "new": "nointegrity",
            },
            {
                "elements": [self.HTMLScriptElement, self.HTMLLinkElement],
                "tags": ['nonce'],
                "action": "rewrite",
                "new": "nononce",
            },
            {
                "elements": [self.HTMLIFrameElement],
                "tags": ['contentWindow', 'contentDocument'],
                "action": "window", 
            },
            {
                "elements": [self.HTMLIFrameElement],
                "tags": ['srcdoc'],
                "action": "html",
            },
            {
                "elements": [self.HTMLElement],
                "tags": ['style'],
                "action": "css"
            },
            {
                "elements": [self.HTMLLinkElement],
                "tags": ['imageSrcset'],
                "action": "srcset"
            }
        ],

        createGetter: (prop: any) => {return {get(this: any): any {return (new URL(this.href||self.__dynamic$location.href) as any)[prop];},set(val: any) {return;}}}
    };

    if (self.Document) self.__dynamic.cookie = {
        str: self.__dynamic$cookie||'',
        desc: Object.getOwnPropertyDescriptor(self.Document.prototype, 'cookie')
    };

    self.__dynamic.http = {
        XMLResponseURL: Object.getOwnPropertyDescriptor(self.XMLHttpRequest.prototype, 'responseURL'),
        ResponseURL: Object.getOwnPropertyDescriptor(self.Response.prototype, 'url'),
        RequestURL: Object.getOwnPropertyDescriptor(self.Request.prototype, 'url'),
    }
}