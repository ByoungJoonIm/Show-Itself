package bjdev.ShowItSelf;

import java.io.IOException;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class IconImageController {
	private final static String EXTENSION = ".jpg";
	
	@Autowired
	ResourceLoader resourceLoader;
	
	/*
	 * This method will be removed.
	 * */
	@GetMapping(
			value = "/iconImages",
			produces = MediaType.IMAGE_JPEG_VALUE
	)
	public @ResponseBody ResponseEntity<byte[]> getTestImage() throws IOException{
		return new ResponseEntity<>(IOUtils.toByteArray(resourceLoader.getResource("classpath:static/images/react-icon.jpg").getURI()), HttpStatus.OK);
	}
	
	@GetMapping(
			value = "/iconImages/{iconName}",
			produces = MediaType.IMAGE_JPEG_VALUE
	)
	public @ResponseBody ResponseEntity<byte[]> getAnImageWithMediaType(@PathVariable String iconName) throws IOException{
		return new ResponseEntity<>(IOUtils.toByteArray(resourceLoader.getResource("classpath:static/images/" + iconName + EXTENSION).getURI()), HttpStatus.OK);
	}
}
