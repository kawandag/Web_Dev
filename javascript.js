//adding menu button that displays Home and Resource links when clicked
document.getElementById('myButton').addEventListener('click', function() { //adding event listener 'click' to the menu button
    const menuList = document.getElementById('menuList'); //selecting the ul id that is assigned menuList. This will allow to select home and resource when "Menu" is clicked. Using const so variable is not resassigned
    if (menuList.style.display === 'none') { //checks the css style for setting. Setting to 'none' hides the list
        menuList.style.display = 'block';//makes the menu items visible on click
    } else {
        menuList.style.display = 'block'; //setting to 'block' allowed menu list to display on first click
    }
    //menuList += '</ul>';

}); 
