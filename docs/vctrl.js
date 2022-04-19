
var pblo;
var dbdy=document.body;
var loadedvid = {};
var ldq = new Array();


function vklr()
{
	this.onloadeddata=null;
	window.URL.revokeObjectURL(this.src);
}




function procbinary(blb,viop)
{
	var ba = new Uint8Array(blb);
	var bylen=ba.byteLength;


	//!!!!!//
	for (var i = 0; i < bylen; i++) {ba[i]^=0xff;}

	//vio.onloadeddata=vklr;

	viop.src=window.URL.createObjectURL(new Blob([blb]));
	
	viop.muted=true;
	
	viop.controls=true;
	viop.loop=true;
}

function rq(fna,viop)
{

var nyviop=document.createElement('video');
viop.replaceWith(nyviop);
viop=nyviop;
viop.title=fna;

loadedvid[fna]=viop;

fetch(jtbase+fna+'.txt',{method: 'get',responseType: 'arraybuffer'}
	).then(res => { return res.arrayBuffer();}
	).then(ab => {procbinary(ab,viop); viop.style.display = 'inline'; viop.autoplay=true;})


return viop;
}

function rqALL(vpblo)
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

		fetch(jtbase+fna+'.txt',{method: 'get',responseType: 'arraybuffer'}
			).then(res => { return res.arrayBuffer();}
			).then(ab => {procbinary(ab,cvid); rqALL(vpblo);})
		
	}
	else { setTimeout(function(){showOne(vpblo);}, 200);}

}

function clearvid()
{
	

	for (var key in loadedvid){
		var cvid=loadedvid[key];
		cvid.pause();
		URL.revokeObjectURL(cvid.src);
		cvid.src=null;
		delete loadedvid[key];
	}

}
var ezkole= document.createElement('FL');
function vsyn()
{
	ezkole.innerHTML='**********<br>';
	
	var lky=Object.keys(loadedvid);
	lky.sort();
	var lkyl=lky.length;
	var davvs=new Int8Array(lkyl);
	var davlist=new Array(lkyl);
	var avah=0;
	for (var nim = 0;nim<lkyl;nim++){
		var key=lky[nim];
		var cvid=loadedvid[key];
		avah+=cvid.videoHeight;
		davlist[nim]=cvid;
		cvid.pause();
		cvid.style.display = 'none';
		davvs[nim]=2;
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
	ezkole.vvs=davvs;
	ezkole.vlist=davlist;
	pblo.appendChild(ezkole);

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

function setup()
{
	
	var vibsl=vydz.length;
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
			
			blo.vvs=new Int8Array(1);
			blo.vlist=[vuj];
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
			blo.vvs=new Int8Array(svl);
			blo.vlist=vujarr;
		}
		dbdy.appendChild(blo);
	}

}



function nxtloop()
{
	var thispblo=this.pblo;
	var tvl=thispblo.vsrc.length;
	if(tvl==1)
	{
		this.currentTime=0;
		this.onended=null;
		this.loop=true;
		this.play();
		return;
	}
	

	var i=thispblo.icur;

	thispblo.vsrc[i].style.display='none';


	i+=1;
	if(i>=tvl) {i=0;}
	thispblo.icur=i;

	thispblo.vsrc[i].currentTime=0;
	thispblo.vsrc[i].style.display='block';
	thispblo.vsrc[i].play();
	
	
}



function exitOne(origsiz)
{
	var lizt=pblo.vsrc;
	pblo.vsrc=null;
	pblo.isrot=false;
	var liztl=lizt.length;
	for(var i=0;i<liztl;i++)
	{
		if(origsiz)
		{
			lizt[i].width=lizt[i].videoWidth;
		}
	
		lizt[i].onended=null;
		lizt[i].style.webkitTransform='';
		lizt[i].style.margin = '';
		lizt[i].style.display='inline';
		lizt[i].muted=true;
		lizt[i].loop=true;
		lizt[i].play();

	}

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
				chvvv.pause();
				chvvv.currentTime=0;
				chvvv.loop=false;
				chvvv.muted=false;
				chvvv.volume = 0.2;
				//chvvv.style.margin = '0 auto';
				chvvv.style.display='none';
				chvvv.onended=nxtloop;
				chvvv.pblo=dpblo;
				vsrc.push(chvvv);
			}
		}

		
		var wyd=vsrc[0].videoWidth;
		if(vsrc[0].height==0)
		{
		dpblo.rto=vsrc[0].videoHeight/wyd;
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
		dpblo.vsrc=vsrc;
		dpblo.icur=0;

		dpblo.vsrc[0].style.display='block';
		dpblo.vsrc[0].play();
			
			
		
	

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

var kontimg=function(e) {
	
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
	var pblovlistelevvv=pblo.vlist[elevvv];
	switch(pblo.vvs[ele.vvv])
	{
		case 0:
		pblo.vvs[elevvv]=1;
		ele.style.color='#fff';
		//vio=pblovlistelevvv;
		pblo.vlist[elevvv]=rq(ele.innerText,pblovlistelevvv);
		return;
		case 1:
		pblo.vvs[elevvv]=2;
		pblovlistelevvv.pause();
		pblovlistelevvv.style.display='none';
		return;
		case -1:
		case 2:
		pblo.vvs[elevvv]=1;
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

