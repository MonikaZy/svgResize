function myFunction() {
    var x = document.getElementById("myNumber").value;
    document.getElementById("logo").height = x;
  }
  
  function bordering() {
      var b = document.getElementById("myBorder").value;
      document.getElementById("logo").style.padding=  b + "px";
  }
  function changeSrcImg(filename) {
    document.getElementById("logo").src=filename;
  }
  
  function start(){
      imagesize();
      convertArray();
      setpath();
  }
  
  
  
  var filename = {
      fname : "Yuki SVG ",
      totalfilewidth : "404 ",
      totalfileheight : "270 ",
      widthNoBorder : "384 ",
      heightNoBorder : "250 ",
      filetype : ".png",
      fullfilename : function() {
          return this.fname + this.totalfilewidth + this.totalfileheight + this.widthNoBorder + this.heightNoBorder + this.filetype;
      }
  };
  
  
  var filepath = {	
  
      beginningpath : "/Users/Monika/SVN/november",
      filetype : "png",
      fullpath : function() {
          return this.beginningpath + "/" +  this.filetype;
      }
  };