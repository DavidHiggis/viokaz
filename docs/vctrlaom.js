var dbdy=document.body;

var pblo;
var loadedvid = {};
var ldq = new Array();


function vklr()
{
	this.onloadeddata=null;
	window.URL.revokeObjectURL(this.src);
}

const txtdec = new TextDecoder("utf-8");


function procbinary(blb,viop)
{
	var bylen=blb.byteLength;
	if(bylen < 0x101){
		viop.msg=txtdec.decode(blb);
		return;}

	var ba = new Uint8Array(blb);

	//!!!!!//
	for (var i = 0; i < bylen; i++) {ba[i]^=0xff;}

	viop.xrc=window.URL.createObjectURL(new Blob([blb]));	
	viop.muted=true;
	
	viop.controls=true;
	viop.loop=true;
}

async function rq(fna,viop)
{

var nyviop=document.createElement('video');
viop.replaceWith(nyviop);
viop=nyviop;
viop.title=fna;

loadedvid[fna]=viop;

await fetch(jtbase+fna+'.txt',{method: 'get',responseType: 'arraybuffer'}
	).then(res => { return res.arrayBuffer();}
	).then(ab => {procbinary(ab,viop); xrc2src(viop); viop.style.display = 'inline'; viop.autoplay=true;})


return viop;
}

async function rqALL(vpblo)
{
	if(ldq.length>0)
	{
		var geet=ldq.pop();
		var cvid= vpblo.vlist[geet];
		var fna=cvid.title;
		var origsty=cvid.style.cssText;
		var nyviop=document.createElement('video');
		cvid.replaceWith(nyviop);
		cvid=nyviop;
		cvid.title=fna;
		cvid.style.cssText=origsty;
		vpblo.vlist[geet]=cvid;
		

		loadedvid[fna]=cvid;

		await fetch(jtbase+fna+'.txt',{method: 'get',responseType: 'arraybuffer'}
			).then(res => { return res.arrayBuffer();}
			).then(ab => {procbinary(ab,cvid);
				if(!cvid.xrc){vpblo.vvs[geet]=-1; vpblo.vlist[geet]=null; cvid.remove();}
				if(geet==0){ cvid.style.display = 'block'; cvid.autoplay=true;  }
				rqALL(vpblo);})
		
	}
	else { setTimeout(function(){showOne(vpblo);}, 200);}

}

function clearvid()
{
	

	for (var key in loadedvid){
		var cvid=loadedvid[key];
		cvid.pause();
		cvid.removeAttribute('src');
		cvid.load();
		URL.revokeObjectURL(cvid.xrc);
		
		cvid.removeAttribute('xrc');
		delete loadedvid[key];
	}

}
var ezkole= document.createElement('FL');
function vsyn(lky=null)
{
	
	if(!lky)
	{
		lky=Object.keys(loadedvid);
		lky.sort();
	}
	var lkyl=lky.length;
	
	var zlym=vsynvvs.length;
	ezkole.innerHTML='*****'+lkyl+'('+zlym+')*****<br>';
	if(lkyl > zlym){lkyl=zlym;}

	var davlist=new Array(lkyl);
	var avah=0;
	for (var nim = 0;nim<lkyl;nim++){
		var key=lky[nim];
		var cvid=loadedvid[key];
		avah+=cvid.videoHeightCache;
		davlist[nim]=cvid;
		cvid.pause();
		cvid.style.display = 'none';
		vsynvvs[nim]=2;
		var h1= document.createElement('h3');
		h1.innerText=key;
		h1.vvv=nim;
		
		ezkole.appendChild(h1);
		
	}
	var effy=document.createElement('p');
	ezkole.appendChild(effy);
	avah=(((avah/lkyl)>>3)+1)<<3;

	for (var nim = 0;nim<lkyl;nim++){
		var cvid=davlist[nim];
		cvid.height=avah;
		effy.appendChild(cvid);
	}

	ezkole.eff=effy;
	ezkole.vvs=vsynvvs;
	ezkole.vlist=davlist;
	pblo.appendChild(ezkole);
	pblo=ezkole;

	return lky;

}

function mkh1(blo,syg,idx)
{
	
	var h1= document.createElement('h3');
	h1.innerText=syg;
	var vuj= document.createElement('b');
	vuj.title=syg;
	vuj.style.display = 'none';
	h1.vvv=idx;
	blo.appendChild(h1);
	return vuj;
	
	

}

function tmb()
{
	var vibsl=vydz.length;
	for(var i=0;i<vibsl;i+=2)
	{
		
		vydz[i+1].style.background="black url('http://127.0.0.1:8233/"+vydz[i]+".mp4') center right no-repeat";
		vydz[i+1].style.backgroundSize="150px auto";
	}

}

var ynfo=new ArrayBuffer(2048);
var vydzbak=null;

function setup(ybt=null)
{
	var vibsl=vydz.length;
	var kydx=0;
	if(vydzbak)
	{
		for(var i=0;i<vibsl;i+=2)
		{
			vydz[i+1].remove();
			vydz[i+1]=vydzbak[kydx];
			kydx++;
		}
		var uint8 = new Uint8Array(ynfo,0,2048);
		uint8.fill(0, 0, 2048);
	}
	else
	{
		var vibsl2=vibsl>>1;
		vydzbak=new Uint8Array(ynfo,2048-vibsl2,vibsl2);
	}
	
	if(ybt)
	{
		vydz=ybt;
		vibsl=vydz.length;
	}
	
	kydx=0;
	var syg=vydz[0].substring(0,3);
	var vydz2=[];
	var bigkole=[];
	var bigkoleNum=[];
	vydz2.push(bigkole);
	vydz2.push(bigkoleNum);
	for(var i=0;i<vibsl;i+=2)
	{
		var sio=vydz[i];
		var svl=vydz[i+1];
		if(svl<4)
		{
				if(!sio.startsWith(syg)) {
					syg=sio.substring(0,3);
					bigkole=[];
					bigkoleNum=[];
					vydz2.push(bigkole);
					vydz2.push(bigkoleNum);
				} else {
					var bbl=bigkole.length;
					if(bbl> 8) {syg=sio.substring(0,5);}
					else if(bbl > 5){syg=sio.substring(0,4);}
					
				}

				if(svl==0) {
					bigkole.push(sio);
				} else {
					for(var j=0;j<svl;j++)
					{
						bigkole.push(sio+'-'+j);
					}
					
				}
				bigkoleNum.push((i+1));
		}
		else
		{
			
			
			var kl=new Array(svl);
			var nu=[(i+1)];
			for(var j=0;j<svl;j++)
			{
				kl[j]=sio+'-'+j;
			}
			vydz2.push(kl);
			vydz2.push(nu);

			if(bigkole.length > 5)
			{
				bigkole=[];
				bigkoleNum=[];
				vydz2.push(bigkole);
				vydz2.push(bigkoleNum);
			}
			
		}
		vydzbak[kydx]=svl;
		kydx++;
	}
	
	
	var ynfoidx=0;
	vibsl=vydz2.length;
	for(var i=0;i<vibsl;i+=2)
	{
		var svl=vydz2[i].length;
		if(svl==0){continue;}
		var blo= document.createElement('FL');
		var foreffect=document.createElement('p');
		blo.eff=foreffect;

		var vujarr=[];
		var nvo=vydz2[i];
			
		for(var j=0;j<svl;j++)
		{
			vujarr.push(mkh1(blo,nvo[j],j));
		}
		
		
		blo.appendChild(foreffect);
		for(var j=0;j<svl;j++)
		{
			foreffect.appendChild(vujarr[j]);
		}
		blo.vvs=new Int8Array(ynfo,ynfoidx,svl);
		blo.vlist=vujarr;
		ynfoidx+=svl;

		dbdy.appendChild(blo);
		nvo=vydz2[i+1];
		svl=nvo.length;
		for(var j=0;j<svl;j++)
		{
			vydz[nvo[j]]=blo;
		}
		
		
		
		
	}


}

function setup0(ybt=null)
{

	var vibsl=vydz.length;
	var kydx=0;
	
	if(vydzbak)
	{
		for(var i=0;i<vibsl;i+=2)
		{
			vydz[i+1].remove();
			vydz[i+1]=vydzbak[kydx];
			kydx++;
		}
		var uint8 = new Uint8Array(ynfo,0,2048);
		uint8.fill(0, 0, 2048);
	}
	else
	{
		var vibsl2=vibsl>>1;
		vydzbak=new Uint8Array(ynfo,2048-vibsl2,vibsl2);
	}
	
	if(ybt)
	{
		vydz=ybt;
		vibsl=vydz.length;
	}
	
	kydx=0;
	var ynfoidx=0;
	for(var i=0;i<vibsl;i+=2)
	{
		var blo= document.createElement('FL');
		
		
		var svl=vydz[i+1];
		var foreffect=document.createElement('p');
		blo.eff=foreffect;
		if(svl==0)
		{
			var vuj=mkh1(blo,vydz[i],0);
			
			blo.appendChild(foreffect);
			foreffect.appendChild(vuj);
			
			blo.vvs=new Int8Array(ynfo,ynfoidx,1);
			blo.vlist=[vuj];
			ynfoidx+=1;
		}
		else
		{
			var vujarr=[];
			
			for(var j=0;j<svl;j++)
			{
				vujarr.push(mkh1(blo,vydz[i]+'-'+j,j));
				
			}
			
			
			blo.appendChild(foreffect);
			for(var j=0;j<svl;j++)
			{
				foreffect.appendChild(vujarr[j]);
			}
			blo.vvs=new Int8Array(ynfo,ynfoidx,svl);
			blo.vlist=vujarr;
			ynfoidx+=svl;
		}
		
		dbdy.appendChild(blo);
		vydz[i+1]=blo;
		vydzbak[kydx]=svl;
		kydx++;
	}
	vsynvvs=new Int8Array(ynfo,ynfoidx,1024-ynfoidx);

}
var zeek=-1;

function vseek(n)
{
	zeek=n;
	
	pblo.vsrc[pblo.icur].onended=nxtloop_seek;
	var seekdst=pblo.vsrc[n];
	xrc2src(seekdst,false);

}

function nxtloop_seek()
{
	var thispblo=this.pblo;
	this.onended=nxtloop;
	var zkvid=thispblo.vsrc[zeek];
	zkvid.currentTime=0;
	zkvid.style.visibility='visible';
	zkvid.play();
	this.style.visibility='hidden';
	
	
	thispblo.icur=zeek;
	zeek=-1;
	
	zkvid.loop=false;
	setTimeout(function(){loadADO(zkvid);}, 100);
}

function nxtloop_only2()
{
	
	var zkvid = this.ado;
	zkvid.currentTime=0;
	zkvid.style.visibility='visible';
	zkvid.play();
	this.style.visibility='hidden';

	var thispblo=this.pblo;
	var i=thispblo.icur;
	i+=1;
	if(i>=2) {i=0;}
	thispblo.icur=i;
	zkvid.loop=false;
	
}

function loadADO(v)
{
	var TheMae=v.mae;
	if(TheMae.src.startsWith('blob:'))
	{
		TheMae.pause();
		TheMae.removeAttribute('src');
		TheMae.load();
	}
	TheMae=v.ado;
	xrc2src(TheMae,false);
	TheMae.pause();
	
	
}

function nxtloop()
{

	var zkvid = this.ado;
	zkvid.currentTime=0;
	zkvid.style.visibility='visible';
	zkvid.play();
	this.style.visibility='hidden';


	var thispblo=this.pblo;
	var tvl=thispblo.vsrc.length;
	
	

	var i=thispblo.icur;

	


	i+=1;
	if(i>=tvl) {i=0;}
	thispblo.icur=i;

	zkvid.loop=false;
	setTimeout(function(){loadADO(zkvid);}, 100);
	
	
	
	
	
	
}



function exitOne(origsiz)
{
	var lizt=pblo.vsrc;

	if(lizt)
	{
	lizt[0].parentElement.style.position='static';
	pblo.vsrc=null;
	pblo.isrot=false;
	var liztl=lizt.length;
	for(var i=0;i<liztl;i++)
	{
		var chvvv=lizt[i];
		chvvv.pause();
		if(origsiz) { chvvv.width=chvvv.videoWidthCache;
		} else { chvvv.width=pblo.wyd; }
	
		chvvv.onended=null;
		if(chvvv.src.startsWith('blob:')){chvvv.style.cssText='display: inline;';}
		else{chvvv.style.cssText='display: none;';}
		
		if(chvvv.volume == 0.2){chvvv.muted=true;}
		
		chvvv.loop=true;
		

	}
	for(var i=0;i<liztl;i++){ lizt[i].play();}
	
	}

}

function cacheWH()
{
	this.oncanplay=null;
	this.videoWidthCache=this.videoWidth;
	this.videoHeightCache=this.videoHeight;
	if(!this.width){this.width=this.videoWidth;}
}

function xrc2src(v,doCache=true)
{
	if(!v.src.startsWith('blob:') && v.xrc) {
	v.autoplay=false;
	v.src=v.xrc;
	if( !v.videoWidthCache){v.oncanplay =cacheWH;}	//doCache &&

	}
}

function vsrc0canplay()
{
	this.oncanplay=null;
	var dpblo = this.pblo;
	var wyd=this.videoWidth;
	var hyd=this.videoHeight;
	this.videoWidthCache=wyd;
	this.videoHeightCache=hyd;
	if(this.height==0)
	{
	dpblo.rto=hyd/wyd;
	if(wyd>0&&wyd<500)
	{
		wyd=500;
		for(var i=0;i<xn;i++)
		{
			dpblo.vlist[i].width=wyd;
		}

	}
	} else {dpblo.rto=1.0;}
	
	dpblo.wyd=wyd;

}

function showOne(dpblo)
{
	
		var vsrc=[];
		var davvs=dpblo.vvs;
		var xn=davvs.length;
		
		for(var i=0;i<xn;i++)
		{
			
			if(davvs[i]>0)
			{
				
				var chvvv=dpblo.vlist[i];
				
				chvvv.currentTime=0;
				chvvv.loop=false;
				if(chvvv.muted)
				{
				chvvv.muted=false;
				chvvv.volume = 0.2;
				}
				//chvvv.style.margin = '0 auto';
				chvvv.style.position='absolute';
				chvvv.style.top='0px';
				chvvv.style.left='0px';
				chvvv.style.display='block';
				chvvv.style.visibility='hidden';
				chvvv.onended=nxtloop;
				chvvv.pblo=dpblo;
				vsrc.push(chvvv);
			}
		}
		vsrc[0].parentElement.style.position='absolute';

		xrc2src(vsrc[0]);

		dpblo.vsrc=vsrc;
		dpblo.icur=0;

		vsrc[0].oncanplay=vsrc0canplay;
		
		
		xn=vsrc.length-1;
		switch(xn)
		{
			case -1:
				return;
			case 0:
				vsrc[0].mae=null;
				vsrc[0].ado=null;
				vsrc[0].onended=null;
				vsrc[0].loop=true;
			break;

			case 1:
				xrc2src(vsrc[1]);
				vsrc[1].pause();

				vsrc[0].mae=null;
				vsrc[1].mae=null;
				vsrc[0].ado=vsrc[1];
				vsrc[1].ado=vsrc[0];
				vsrc[0].onended=nxtloop_only2;
				vsrc[1].onended=nxtloop_only2;
				
			break;

			default:
				xrc2src(vsrc[1]);
				vsrc[1].pause();
				
				vsrc[0].mae=vsrc[xn];
				vsrc[0].ado=vsrc[1];
				vsrc[xn].mae=vsrc[xn-1];
				vsrc[xn].ado=vsrc[0];
				for(var i=1;i<xn;i++)
				{
					vsrc[i].mae=vsrc[i-1];
					vsrc[i].ado=vsrc[i+1];
				}
				xn+=1;
				for(var i=2;i<xn;i++)
				{
					if(vsrc[i].src.startsWith('blob:'))
					{
					vsrc[i].pause();
					vsrc[i].removeAttribute('src');
					vsrc[i].load();
					}
				}
				
				
			break;


		}


		
		
		
		

		vsrc[0].style.visibility='visible';
		vsrc[0].play();


			
			
		
	

}

function shuf()
{
	var parr=document.getElementsByTagName('FL');
	var parrl=parr.length;
	for(var i=0;i<parrl;i++)
	{
		dbdy.appendChild(parr[(Math.random()*parrl)>>0]);
	}

}

async function kontimg(e)
{
	
	var ele=e.target;
	

if(ele.tagName=='H3')
{
	pblo=ele.parentElement;
	if(!pblo.stk)
	{
		pblo.stk=true;
		pblo.style.display='block';
		pblo.style.margin='0px';
		
	}

	var elevvv=ele.vvv;
	if(elevvv < 0){return;}
	var pblovlistelevvv=pblo.vlist[elevvv];
	switch(pblo.vvs[ele.vvv])
	{
		case 0:
		var xvio=await rq(ele.innerText,pblovlistelevvv);
		if(!xvio.xrc) {
			pblo.vvs[elevvv]=-1;
			pblo.vlist[elevvv]=null;
			ele.innerText =xvio.msg;
			xvio.remove();
			ele.vvv=-1;
			
			return;
		}
		pblo.vvs[elevvv]=1;
		pblo.vlist[elevvv]=xvio;
		ele.style.color='#fff';
		
		return;
		case 1:
		pblo.vvs[elevvv]=2;
		ele.style.color='#777';
		pblovlistelevvv.pause();
		pblovlistelevvv.removeAttribute('src');
		pblovlistelevvv.load();
		pblovlistelevvv.style.display='none';
		return;
		case -1:
		ele.innerText ='<<<<<<<<<<<<<<<<<<<<<<';
		ele.vvv=-1;
		return;
		case 2:
		pblo.vvs[elevvv]=1;
		xrc2src(pblovlistelevvv);
		ele.style.color='#fff';
		pblovlistelevvv.play();
		pblovlistelevvv.style.display='inline';
		return;
		default:
		return;
	}
	
	
} else if(ele.tagName=='VIDEO') {
	if(ele.pblo) {
		pblo=ele.pblo;
	} else {
		pblo=ele.parentElement.parentElement;
	}

}
	
}



function rotvi(pblo,left)
{
	if(pblo.rto>1)
	{
		var xn=pblo.vsrc.length;

		var exceed=(((pblo.rto-1)*pblo.wyd)).toFixed(0)+'px';
		for(var i=0;i<xn;i++)
		{
			
			pblo.vsrc[i].style.marginLeft = exceed;//'0 auto';
		}
		pblo.rto=0;
	}

	if(pblo.isrot)
	{
		pblo.isrot=false;
		allvsrc(pblo.vsrc,3,'');
		
	}
	else
	{
		pblo.isrot=true;
		var t1=left?-1.0:1.0;
		allvsrc(pblo.vsrc,3, 'matrix(0,'+t1+','+(-t1)+',0,0,0)');
	}

}

var bloskl=105;

function allvsrc(lizt,typ,value)
{
	var lup=lizt.length;
	
		switch(typ)
		{
			case 1:	//playbackRate
			for(var i=0;i<lup;i++){lizt[i].playbackRate=value;}
			return;

			case 2:	//width
			for(var i=0;i<lup;i++){lizt[i].width=value;}
			return;

			case 3:	//tranzf
			for(var i=0;i<lup;i++){lizt[i].style.webkitTransform=value;}
			return;
			
		
		}


	

}


var kycmd=function(e) {
    var ekeyCode=e.keyCode;
    switch (ekeyCode) {
	case 27:
	exitOne(true);
	return;
	case 106:
	exitOne(false);
	return;
        case 101:
        showOne(pblo);
        return;
	case 65:
		if(ldq.length==0)
		{
			var vvsl=pblo.vvs.length
			for(var i=0;i<vvsl;i++)
			{
				if(pblo.vvs[i]==0)
				{
					ldq.push(i);
					pblo.vvs[i]=2;
				}
				rqALL(pblo);
			}
		}
	return;
	case 66:
		if(pblo.eff.style.webkitFilter)
		{
			pblo.eff.style.webkitFilter='';
		}
		else {pblo.eff.style.webkitFilter='url(#blm)';}
	return;
	
    }

	
	if(pblo&&pblo.vsrc)
	{
		vio=pblo.vsrc[pblo.icur];
		switch (ekeyCode) {
		case 97:
		vio.currentTime-=0.5;
		return;
		case 99:
		vio.currentTime+=0.5;
		return;
		case 100:
		pblo.wyd-=100;
		var uv=pblo.wyd;
		allvsrc(pblo.vsrc,2,uv);
		return;

		case 102:
		pblo.wyd+=100;
		var uv=pblo.wyd;
		allvsrc(pblo.vsrc,2,uv);

		return;
		case 98:
		var uv=vio.playbackRate-0.1;
		if(uv<0.2) {uv=0.2;}
		allvsrc(pblo.vsrc,1,uv);

		return;
		case 104:
		var uv=vio.playbackRate+0.1;
		allvsrc(pblo.vsrc,1,uv);
		return;
		case 103:
		rotvi(pblo,true);
		return;
		case 105:
		rotvi(pblo,false);
		return;
		}

	}
	else
	{
		switch (ekeyCode) {

			case 100:
			pblo.style.width=bloskl+'%';
			bloskl-=5;
			return;

			case 102:
			pblo.style.width=bloskl+'%';
			bloskl+=5;
			return;

			case 103:
			rotvi(pblo,true);
			return;
			case 105:
			rotvi(pblo,false);
			return;
		}
	}

}


document.onclick=kontimg;
document.onkeydown=kycmd;

