# opendatahub-bootcamp-website

Developing a basic website  
- Creating a website that incorporates the web component developed by the web component team and based on the instructions provided by the documentation team
- Displaying a list view of Points of Interest (POIs)
- User features  
Allowing users to filter POI types.  
Providing a search functionality by name.  
- Bonus features  
Adding a map view to the website  
Incorporating additional web components from the store, such as weather.

Challenge presentation:  
https://bit.ly/OpenDataHub23

### Opendatahub Tourism Api
https://tourism.api.opendatahub.com/v1  
  
### Swagger
https://tourism.api.opendatahub.com/swagger/index.html

### Endpoint for Points of Interests
ODHActivityPoi  
https://tourism.api.opendatahub.com/swagger/index.html#/ODHActivityPoi/get_v1_ODHActivityPoi

### Searchfilter, Field Selection
https://github.com/noi-techpark/odh-docs/wiki/Common-parameters%2C-fields%2C-language%2C-searchfilter%2C-removenullvalues%2C-updatefrom

### Filtering
https://github.com/noi-techpark/odh-docs/wiki/Filter-ODHActivityPoi-by-Tags  
https://github.com/noi-techpark/odh-docs/wiki/Using-rawfilter-and-rawsort-on-the-Tourism-Api

### Webcomponent Store
https://webcomponents.opendatahub.testingmachine.eu/

### Example Webcomponent (POI Detail)
https://webcomponents.opendatahub.testingmachine.eu/webcomponent/tourism-detail

### Deployment on Website
https://bootcamp.opendatahub.testingmachine.eu/

### Hints
Display only POIs with Images (Parameter hasimage)  
https://tourism.api.opendatahub.com/v1/ODHActivityPoi?hasimage=true  

Searching trough the ODHActivityPois
https://tourism.api.opendatahub.com/v1/ODHActivityPoi?searchfilter=Test&language=en

Getting all Tags to filter on 
https://tourism.api.opendatahub.bz.it/v1/Tag?rawfilter=isnotnull(DisplayAsCategory)
Filter on this Tags
https://tourism.api.opendatahub.com/v1/ODHActivityPoi?tagfilter=or(horses,ruins)

Reuse Detail Webcomponent
https://webcomponents.opendatahub.com/webcomponent/tourism-detail
