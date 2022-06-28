var keyshotXR;

      function initKeyShotXR() {
        var nameOfDiv = "KeyShotXR";
        var folderName = "untitled.1";
        var viewPortWidth = 358;
        var viewPortHeight = 666;
        var backgroundColor = "transparent";
        var uCount = 150;
        var vCount = 1;
        var uWrap = true;
        var vWrap = false;
        var uMouseSensitivity = -0.05;
        var vMouseSensitivity = 0.05;
        var uStartIndex = 1;
        var vStartIndex = 0;
        var minZoom = 1;
        var maxZoom = 1;
        var rotationDamping = 0.96;
        var downScaleToBrowser = true;
        var addDownScaleGUIButton = false;
        var downloadOnInteraction = false;
        var imageExtension = "png";
        var showLoading = false;
        var loadingIcon = "ks_logo.png"; // Set to empty string for default icon.
        var allowFullscreen = false; // Double-click in desktop browsers for fullscreen.
        var uReverse = false;
        var vReverse = false;
        var hotspots = {};
        var isIBooksWidget = false;
        
        keyshotXR = new keyshotXR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots,isIBooksWidget);
      }

      window.onload = initKeyShotXR;