package bjdev.ShowItSelf;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.io.IOException;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class TechniqueCardProcessor implements RepresentationModelProcessor<EntityModel<TechniqueCard>> {
    @Override
    public EntityModel<TechniqueCard> process(EntityModel<TechniqueCard> resource) {

    	TechniqueCard techniqueCard = resource.getContent();
    	
    	try {
    		// tag::hateoas[]
        	resource.add(linkTo(methodOn(IconImageController.class).getAnImageWithMediaType(techniqueCard.getIconName())).withRel("iconImageLink"));    		
        	// end::hateoas[]
    	} catch(IOException ioe) {
    		ioe.printStackTrace();;
    	}
    	
        return resource;
    }
}