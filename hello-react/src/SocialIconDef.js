import twi from './img/twi.svg'
import fb from './img/fb.svg'
import gmail from './img/gmail.svg'
import linkd from './img/linkd.svg'
import insta from './img/insta.svg'
import whats from './img/whats.svg'
import slack from './img/slack.svg'
import soverflow from './img/soverflow.svg'
import github from './img/github.svg'
import ytube from './img/ytube.svg'

class SocialIconDef {
    constructor(name, src) {
        this.name = name;
        this.src = src ;
    }
}

const socialIcons = [new SocialIconDef("twi", twi)]
socialIcons.push(new SocialIconDef("fb", fb))
socialIcons.push(new SocialIconDef("gmail", gmail))
socialIcons.push(new SocialIconDef("linkd", linkd))
socialIcons.push(new SocialIconDef("insta", insta))
socialIcons.push(new SocialIconDef("whats", whats))
socialIcons.push(new SocialIconDef("slack", slack))
socialIcons.push(new SocialIconDef("soverflow", soverflow))
socialIcons.push(new SocialIconDef("github", github))
socialIcons.push(new SocialIconDef("ytube", ytube))


export default socialIcons;