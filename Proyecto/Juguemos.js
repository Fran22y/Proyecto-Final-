//Juguemos
let currentDroppable = null;
    Imagen1.onmousedown = function(event) {
      let shiftX = event.clientX - Imagen1.getBoundingClientRect().left;
      let shiftY = event.clientY - Imagen1.getBoundingClientRect().top;
      Imagen1.style.position = 'absolute';
      Imagen1.style.zIndex = 1000;
      document.body.append(Imagen1);
	  moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        Imagen1.style.left = pageX - shiftX + 'px';
        Imagen1.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        Imagen1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Imagen1.hidden = false;
        if (!elemBelow) return;
        let HuecosBelow = elemBelow.closest('.Huecos');
        if (currentDroppable != HuecosBelow) {
          if (currentDroppable) { 
            leaveDroppable(currentDroppable);
          }
          currentDroppable = HuecosBelow;
          if (currentDroppable) { 
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);
      Imagen1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Imagen1.onmouseup = null;
      };
    };
    function leaveDroppable(elem) {
      elem.style.background = '';
    }
    Imagen1.ondragstart = function() {
      return false;
    };
        Imagen2.onmousedown = function(event) {
      let shiftX = event.clientX - Imagen2.getBoundingClientRect().left;
      let shiftY = event.clientY - Imagen2.getBoundingClientRect().top;
      Imagen2.style.position = 'absolute';
      Imagen2.style.zIndex = 1000;
      document.body.append(Imagen2);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        Imagen2.style.left = pageX - shiftX + 'px';
        Imagen2.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        Imagen2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Imagen2.hidden = false;
        if (!elemBelow) return;
      }
      document.addEventListener('mousemove', onMouseMove);
      Imagen2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Imagen2.onmouseup = null;
      };
    };
    function leaveDroppable(elem) {
      elem.style.background = '';
    }
    Imagen2.ondragstart = function() {
      return false;
    };
    Imagen3.onmousedown = function(event) {
      let shiftX = event.clientX - Imagen3.getBoundingClientRect().left;
      let shiftY = event.clientY - Imagen3.getBoundingClientRect().top;
      Imagen3.style.position = 'absolute';
      Imagen3.style.zIndex = 1000;
      document.body.append(Imagen3);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        Imagen3.style.left = pageX - shiftX + 'px';
        Imagen3.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        Imagen3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Imagen3.hidden = false;
    }
      document.addEventListener('mousemove', onMouseMove);
      Imagen3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Imagen3.onmouseup = null;
      };
    };
    function leaveDroppable(elem) {
      elem.style.background = '';
    }
    Imagen3.ondragstart = function() {
      return false;
    };

    function reinicio() {
    window.location.reload();
}