## Design
- It is not have version at this time.
- It supports three api as follow
  - technique cards
  - technology cards
  - iconImages
- It follows hateoas.

## API
- end points
  - [url]/api/technologyCards/[card id]
  - [url]/api/techniqueCards/[card id]
  - [url]/api/iconImages/[iconName]
    - [iconName] doesn't have extension and is lowercase. Refer to names in [here](https://github.com/ByoungJoonIm/Show-Itself/tree/master/src/main/resources/static/images)
    - example : `http://bjdev.site/api/iconImages/spring`
