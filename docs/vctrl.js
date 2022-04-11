
var pblo;
var dbdy=document.body;



function vklr()
{
	this.onloadeddata=null;
	window.URL.revokeObjectURL(this.src);
}



function procbinary(blb)
{
	var ba = new Uint8Array(blb);
	var bylen=ba.byteLength;


	//!!!!!//
	for (var i = 0; i < bylen; i++) {ba[i]^=0xff;}

	//vio.onloadeddata=vklr;

	vio.src=window.URL.createObjectURL(new Blob([blb]));
	vio.style.display = 'inline';
	vio.muted=true;
	vio.autoplay=true;
	vio.controls=true;
	vio.loop=true;
}

function rq(fna)
{

 fetch(jtbase+fna+'.txt',{
        method: 'get',
        responseType: 'arraybuffer'
    }).then(res => { return res.arrayBuffer();}
    ).then(ab => {procbinary(ab);}
    )



}

function mkh1(blo,syg,idx)
{
	
	var h1= document.createElement('h3');
	h1.innerText=syg;
	var vuj= document.createElement('video');
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
		if(svl==0)
		{
			var vuj=mkh1(blo,vydz[i],0);
			blo.appendChild(vuj);
			blo.vvs=new Uint8Array(1);
			blo.vlist=[vuj];
		}
		else
		{
			var vujarr=[];
			
			for(var j=0;j<svl;j++)
			{
				vujarr.push(mkh1(blo,vydz[i]+'-'+j,j));
				
			}
			
			var foreffect=document.createElement('p');
			blo.appendChild(foreffect);
			for(var j=0;j<svl;j++)
			{
				foreffect.appendChild(vujarr[j]);
			}
			blo.eff=foreffect;
			blo.vvs=new Uint8Array(svl);
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

function showOne()
{
	if(pblo)
	{
		var vsrc=[];
		var wyd=0;
		var xn=pblo.vlist.length;
		for(var i=0;i<xn;i++)
		{
			var chvvv=pblo.vlist[i];
			var urk=chvvv.src;
			if(urk)
			{
				
				wyd=chvvv.videoWidth;
				chvvv.pause();
				chvvv.currentTime=0;
				chvvv.loop=false;
				chvvv.muted=false;
				chvvv.volume = 0.2;
				//chvvv.style.margin = '0 auto';
				chvvv.style.display='none';
				chvvv.onended=nxtloop;
				chvvv.pblo=pblo;
				vsrc.push(chvvv);
			}
		}

		if(wyd>0&&wyd<500)
		{
			wyd=500;
			for(var i=0;i<xn;i++)
			{
				pblo.vlist[i].width=wyd;
			}

		}
		pblo.wyd=wyd;
		pblo.vsrc=vsrc;
		pblo.icur=0;

		pblo.vsrc[0].style.display='block';
		pblo.vsrc[0].play();
			
			
		
	}

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
		pblo.style.border='';
		
	}

	var elevvv=ele.vvv;
	var pblovlistelevvv=pblo.vlist[elevvv];
	switch(pblo.vvs[ele.vvv])
	{
		case 0:
		pblo.vvs[elevvv]=1;
		ele.style.color='#fff';
		vio=pblovlistelevvv;
		rq(ele.innerText);
		return;
		case 1:
		pblo.vvs[elevvv]=2;
		pblovlistelevvv.pause();
		pblovlistelevvv.style.display='none';
		return;
		case 2:
		pblo.vvs[elevvv]=1;
		pblovlistelevvv.play();
		pblovlistelevvv.style.display='inline';
		return;
		default:
		return;
	}
	
	
}
	
}



function rotvi(pblo,left)
{
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
        showOne();
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

