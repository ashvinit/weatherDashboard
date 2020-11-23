# weatherDashboard

The Open Weather Map API was used to create this Weather Dashboard.

[![Main Page](assets/images/img1.png)]

1. First I created a HTML skeleton with an input area and a search button.

[![input-group-html](assets/images/img2.png)]

[![input-group](assets/images/img3.png)]

2. Next I created an on click event and a function to search the name of a city and create an ajax call to retrieve the data of the city

[![on-click-event](assets/images/img4.png)]

[![searchCity function](assets/images/img5.png)]

3. I used the data that I retrieved to create the weather dashboard dynamically using jQuery

[![data](assets/images/img6.png)]

[![dynamically created dashboard](assets/images/img7.png)]

[![dashboard](assets/images/img8.png)]

4. Used local storage to store and retrieve searched cities and print into a list

[![function store](assets/images/img9.png)]

[![get](assets/images/img10.png)]

[![searched city list](assets/images/img11.png)]

5. Used another ajax call to create the UV index, along with an if else statement to display appropriate color to show whether the uv index is severe or favorable

[![uv index](assets/images/img12.png)]

    * Favorable - [![favorable](assets/images/img13a.png)] 
    * Moderate - [![moderate](assets/images/img13b.png)]
    * High - [![high](assets/images/img13c.png)]



6. Last and final ajax call to create the five day forecast dynamically

[![five day forecast](assets/images/img14.png)]

[![forecast](assets/images/img15.png)]


