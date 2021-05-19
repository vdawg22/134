/**
 * @param  {} document
 * @param  {} 'DOMContentLoaded'
 * @param  {} function(
 * @param  {} {vardraw=SVG(
 * @param  {} .addTo('body'
 * @param  {} .size('1000px'
 * @param  {} '1000px'
 * @param  {} ;varwindow=draw.group(
 * @param  {} ;window.rect(400
 * @param  {} 400
 * @param  {} .stroke("orange"
 * @param  {} .fill("white"
 * @param  {} window.click(function(event
 * @param  {} {console.log("Window"
 * @param  {} console.log(event
 * @param  {} }
 * @param  {} varButton=function(draw
 * @param  {} {varrect=draw.rect(100
 * @param  {} 50
 * @param  {} .fill('red'
 * @param  {} varclickEvent=nullvarstateEvent=nullvardefaultState="idle"rect.mouseover(function(
 * @param  {'blue'}} {this.fill({color
 */
import {SVG} from './svg.min.js';

SVG.on(document, 'DOMContentLoaded', function(){
    var draw = SVG().addTo('body').size('1000px','1000px');
    var window = draw.group();
    window.rect(400,400).stroke("orange").fill("white")
    window.click(function(event){
      console.log("Window")
      console.log(event)
    })

//what creates the button 
    var Button = function(draw){
      var rect = draw.rect(100,50).fill('red')
      var clickEvent = null
      var stateEvent = null
      var defaultState = "idle"
      
      rect.mouseover(function(){
          this.fill({ color: 'blue'})
          defaultState = "hover"
          console.log("Mouse Over")
      })
      rect.mouseout(function(){
          this.fill({ color: 'red'})
          defaultState = "idle"
          console.log("Mouse Out")
      })
      rect.mousedown(function(){
          this.fill({ color: 'red'})
          defaultState = "pressed"
          console.log("Mouse Down")
      })
      rect.mouseup(function(){
          this.fill({ color: 'red'})
          if (defaultState == "pressed"){
            if(clickEvent != null)
                clickEvent(event)
          }
          defaultState = "up"
          console.log("Mouse Up")
      })
      rect.mousemove(function(event){
      })

     
      return {
          move: function(x, y) {
              rect.move(x, y);
          },
          stateChanged: function(eventHandler){
            stateEvent = eventHandler 
            //console.log("State Changed")
          },
          onclick: function(eventHandler){
              clickEvent = eventHandler
          },
          src: function(){
              return rect;
          },
          setId: function(id){
            rect.attr("id", id)
          }
      }
    }

//displays button 1
    var btn = new Button(draw)
    btn.setId("btn1")
    btn.move(20,20);
    btn.onclick(function(event){
      console.log(event)
      console.log(event.target)
      console.log("Button Clicked")
    })
    btn.stateChanged(function(event){
      console.log(event)
      console.log("state changed for button 1")
    })
    btn.stateChanged(function(event){
      //navigate to a new page
    })
 //displays button 2
    var btn2 = new Button(draw)
    btn2.setId("btn2")
    btn2.move(20,100);
    btn2.onclick(function(event){
      console.log(event)
      console.log(event.target)
      console.log("Button Clicked")
    })

    window.add(btn.src);
    window.add(btn2.src);
    window.move(10,10)

//creates textbox
    var TextBox = function(draw){
      var textbox = draw.group();
      var clickEvent = null
      var stateEvent = null
      var defaultState = "idle"

      var rect = textbox.rect(200, 30).fill("white").stroke("black")
      var text = textbox.text("hello").move(2,4);
      var caret = textbox.line(45, 2.5, 45, 25).stroke({ width: 1, color: "black" })
      
      return {
          move: function(x, y) {
              rect.move(x, y);
          },
          src: function(){
              return textbox;
          }
      }
    }
//displays text box

//creates checkbox
  var Checkbox = function(draw){
  var checkbox = draw.rect(20,20).fill('gray')
  var clickEvent = null
  var stateEvent = null
  var defaultState = "unchecked"

  checkbox.mouseover(function(){
    defaultState = "hover"
    console.log("Mouse Over in Checkbox")
  })
  checkbox.mouseout(function(){
    defaultState = "idle"
    console.log("Mouse Out in Checkbox")
  })
  checkbox.mousedown(function(){
    defaultState = "pressed"
    console.log("Mouse Down in Checkbox")
  })
  checkbox.mouseup(function(){
    if (defaultState == "pressed"){
      if(clickEvent != null)
          clickEvent(event)
    }
    defaultState = "up"
    console.log("Mouse Up in Checkbox")
  })
  
  return {
    
    move: function(x, y) {
      checkbox.move(x, y);
  },
    stateChanged: function(eventHandler){
      stateEvent = eventHandler 
      //console.log("State Changed")
    },
    onclick: function(eventHandler){
        clickEvent = eventHandler
        
    },
    src: function(){
        return checkbox;
    },
    setId: function(id){
      checkbox.attr("id", id)
    }
  } 
  }

  //display checkbox
  var cb = new Checkbox(draw)
      cb.setId("cb")
      cb.move(20,500)
      draw.text("CheckBox").fill('black').move(20,450)
      console.log("Checkbox State: Button Unchecked")
      cb.onclick(function(event){
        draw.text("x").fill('black').move(25,500)
        console.log(event)
        console.log(event.target)
        console.log("Checkbox State: Button Checked")
      })
      cb.stateChanged(function(event){
        console.log(event)
        console.log("state changed for CheckBox")
      })
      cb.stateChanged(function(event){
        //navigate to a new page
      })

      //display scrollbar
var Scrollbar = function(draw){
  var bar = SVG().addTo('body').size(1200, 1200)
  var line = draw.line(100, 500, 100, 0).move(900, 10)
  var line2 = draw.line(100, 300, 100, 100).move(900, 10)
  line.stroke({ color: 'black', width: 10, linecap: 'round' })
  line2.stroke({ color: 'gray', width: 10, linecap: 'round' })
  var clickEvent = null
  var stateEvent = null
  var defaultState = "idle"
  
  line.mouseover(function(){
    defaultState = "hover"
    console.log("Mouse Over in line")
  })
  line.mouseout(function(){
    defaultState = "idle"
    console.log("Mouse Out in line")
  })
  line.mousedown(function(){
    defaultState = "pressed"
      line2.move(900,90)
    console.log("Mouse Down in line")
  })
  line.mouseup(function(){
    if (defaultState == "pressed"){
      if(clickEvent != null)
          clickEvent(event)
    }
    defaultState = "up"
    console.log("Mouse Up in line")
  })
  
 
  return {
      move: function(x, y) {
          bar.move(x, y);
      },
      stateChanged: function(eventHandler){
        stateEvent = eventHandler 
        //console.log("State Changed")
      },
      onclick: function(eventHandler){
          clickEvent = eventHandler
          //line2.move(900,20)
      },
      src: function(){
          return line;
      },
      setId: function(id){
        line.attr("id", id)
      }
  }
}

  //display scrollbar
  var scroll = new Scrollbar(draw)
  scroll.setId("scroll")
  scroll.move(900,10)

  console.log("Scrollbar Unmoved")

  scroll.onclick(function(event){
    scroll.move(900,50)
    console.log(event)
    console.log(event.target)
    console.log("Scrollbar State: Moved Down")
  })
  scroll.stateChanged(function(event){
    console.log(event)
    console.log("state changed for Scrollbar")
  })
  scroll.stateChanged(function(event){
    //navigate to a new page
  })

//creates textbox
var textbox = function(draw){
var input = document.querySelector('input[type=text]')

var text = draw.text(function(add) {
	add.tspan( input.value )
})
var clickEvent = null
var stateEvent = null
var defaultState = "Unchanged"

text.mouseover(function(){
  defaultState = "hover"
  console.log("Mouse Over in Textbox")
})
text.mouseout(function(){
  defaultState = "idle"
  console.log("Mouse Out in Textbox")
})
text.mousedown(function(){
  defaultState = "pressed"
  console.log("Mouse Down in Textbox")
})
text.mouseup(function(){
  if (defaultState == "pressed"){
    if(clickEvent != null)
        clickEvent(event)
  }
  defaultState = "up"
  console.log("Mouse Up in Textbox")
})

  return {
    move: function(x, y) {
        text.move(x, y);
    },
    stateChanged: function(eventHandler){
      stateEvent = eventHandler 
      //console.log("State Changed")
    },
    onclick: function(eventHandler){
        clickEvent = eventHandler
    },
    src: function(){
        return line;
    },
    setId: function(id){
      text.attr("id", id)
    }
  }
}
function updateText(textPath) {
	return function() {
		textPath.tspan(this.value)
	}				
}
//display textbox
var txt = new textbox(draw)
txt.setId("text")
console.log("Textbox Unchanged")
txt.onclick(function(event){
  console.log(event)
  console.log(event.target)
  console.log("TextBox State: Changed")
})
txt.stateChanged(function(event){
  console.log(event)
  console.log("state changed for Textbox")
})
txt.stateChanged(function(event){
  //navigate to a new page
})

});
