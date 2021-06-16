//// Licence MIT : V4 : Credits Alberto Marà

class PathFinder
{

    constructor()
    { 
      this.pathanalyzer();
    }

    pathanalyzer()
    {

        this.url        = String(window.location);
        this.islocal    = (this.url.includes('git-')||this.url.includes('lws-')) ? true : false;
        this.protocol   = (this.url.includes('http')) ? 'http' : 'https';
        this.hostname   = this.url.split(this.protocol+"://")[1].split("/")[0];
        this.basehost   = this.protocol+"://"+this.hostname+'/';
        this.pagename   = this.url.split("/").pop().split("?")[0];
        this.resouces   = this.basehost+'resources/';

        //exemple of subs resources shortcuts:
        this.boimg  = this.resouces+'backoffice/images/';
        this.boico  = this.resouces+'backoffice/icons/';
        this.foimg  = this.resouces+'frontoffice/images/';
        this.foico  = this.resouces+'frontoffice/icons/';

    }


}
const paths = new PathFinder();


// how to use into js project**: 
// log("actual page is: ",paths.pagename);
// <img src="'+paths.foico+'myimage.svg">

// * this file can be used only in js and tested out of node.js
// * "resources" and all shortcuts is an exemple and optional folders
