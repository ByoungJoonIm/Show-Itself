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
    - example : [http://bjdev.site/api/technologyCards](http://bjdev.site/api/technologyCards)
    - example : [http://bjdev.site/api/technologyCards/3](http://bjdev.site/api/technologyCards/3)
  - [url]/api/techniqueCards/[card id]
    - example : [http://bjdev.site/api/techniqueCards](http://bjdev.site/api/techniqueCards)
    - example : [http://bjdev.site/api/techniqueCards/10](http://bjdev.site/api/techniqueCards/10) ※ This example is vaild now, but I'am not sure at the future. If you have trouble, check each id by using above example.
  - [url]/api/iconImages/[iconName]
    - [iconName] doesn't have extension and is lowercase. Refer to names in [here](https://github.com/ByoungJoonIm/Show-Itself/tree/master/src/main/resources/static/images)
    - example : [http://bjdev.site/api/iconImages/spring](http://bjdev.site/api/iconImages/spring)
