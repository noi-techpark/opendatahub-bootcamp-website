<!--
SPDX-FileCopyrightText: Copyright (C) 2023 NOI Techpark
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->

# opendatahub-bootcamp-website

![REUSE Compliance](https://github.com/noi-techpark/opendatahub-bootcamp-website/actions/workflows/reuse.yml/badge.svg)

## About the project
The scope of the website is to allow the user to search for points of interest 
to then allow them to look up, through the use of a web component, the nearest 
parking spaces. The web component to integrate will be in the [webcomponent store](https://webcomponents.opendatahub.testingmachine.eu/).
## Tech stack
- HTML
- CSS
- JS
- Bootstrap
## Repo structure
The only relevant thing is that the static files have to be put in the `dist` folder so that the CI deployment will be done successfully.

## How to use
Deployment is handled automatically through the use of a GitHub Action. More 
specifically it will copy the content of the `dist` folder to an AWS S3 bucket 
that will serve the website at the link [here](https://webcomponents.opendatahub.testingmachine.eu/).
## License
The license for this project can be found in the `LICENSE` file. It is the Affero GNU license.

## REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:
```bash
pip install pre-commit
```
Then install the pre-commit hook via the config file by running:
```bash
pre-commit install
```

## Other
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
https://tourism.api.opendatahub.com/v1/Tag?rawfilter=isnotnull(DisplayAsCategory)
Filter on this Tags
https://tourism.api.opendatahub.com/v1/ODHActivityPoi?tagfilter=or(horses,ruins)

Reuse Detail Webcomponent
https://webcomponents.opendatahub.com/webcomponent/tourism-detail
