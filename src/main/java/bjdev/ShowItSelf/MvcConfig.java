package bjdev.ShowItSelf;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer{
	static final String HOME = "index";
	static final String DOCS = "docs";
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/home").setViewName(HOME);
		registry.addViewController("/").setViewName(HOME);
		registry.addViewController("/docs").setViewName(DOCS);
	}
}
