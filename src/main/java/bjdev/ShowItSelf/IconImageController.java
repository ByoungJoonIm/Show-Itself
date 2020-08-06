package bjdev.ShowItSelf;

import java.io.IOException;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IconImageController {
	@Autowired
	ResourceLoader resourceLoader;
	
	@GetMapping(
			value = "/iconImages",
			produces = MediaType.IMAGE_JPEG_VALUE
	)
	public @ResponseBody byte[] getImageWithMediaType() throws IOException{
		return IOUtils.toByteArray(resourceLoader.getResource("classpath:static/images/react-icon.jpg").getURI());
	}
}
