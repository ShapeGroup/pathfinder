//// Licence MIT : V4 : Credits Alberto Marà
//:: plain js version - for web project

class PATHFINDER
{

    constructor()
    { 
      this.pathanalyzer();
    }

    pathanalyzer()
    {

        this.url        = String(window.location);
        this.islocal    = (this.url.includes('dev-')) ? true : false;
        this.protocol   = (this.url.includes('https')) ? 'https' : 'http';
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
const paths = new PATHFINDER();
