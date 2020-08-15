package bjdev.ShowItSelf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/*
 * this class will use temporally.
 * */

@Component
public class DatabaseLoader implements CommandLineRunner{
	private final TechnologyCardRepository technologyCardRepository;
	private final TechniqueCardRepository techniqueCardRepository;
	
	@Autowired
	public DatabaseLoader(TechnologyCardRepository technologyCardRepository, TechniqueCardRepository techniqueCardRepository) {
		this.technologyCardRepository = technologyCardRepository;
		this.techniqueCardRepository = techniqueCardRepository;
	}
	
	@Override
	public void run(String... strings) throws Exception{
		//technologies
		this.technologyCardRepository.save(new TechnologyCard("React", "It used for frontend. This grammar based on react-spring guide in spring web site.", "react"));
		this.technologyCardRepository.save(new TechnologyCard("Spring", "It used for backend. See techniques detail.", "spring"));
		this.technologyCardRepository.save(new TechnologyCard("AWS", "EC2 instance was used at this time. It will be huge instance for changing to kubernetes.", "aws"));
		this.technologyCardRepository.save(new TechnologyCard("Docker", "Image build will be occurred automatically when I push to dev branch in github or make new release.", "docker"));
		this.technologyCardRepository.save(new TechnologyCard("Git", "It was used for version management system.", "git"));
		this.technologyCardRepository.save(new TechnologyCard("Gradle", "Gradle is modern build tool and it is faster than maven(Referenced by gradle).", "gradle"));
		this.technologyCardRepository.save(new TechnologyCard("NodeJs", "Nodejs provides frontend runtime.", "nodejs"));
		
		
		//techniques
		this.techniqueCardRepository.save(new TechniqueCard("REST API", "It is designed by REST API", "rest"));
		this.techniqueCardRepository.save(new TechniqueCard("HATEOAS", "It is used for providing other links", "hateoas"));
		this.techniqueCardRepository.save(new TechniqueCard("EC2", "t2.micro(1 vcpu and 1GB RAM) instance was used at this time.", "ec2"));
		this.techniqueCardRepository.save(new TechniqueCard("Github", "It is public repository which is provided by microsoft.", "github"));
		this.techniqueCardRepository.save(new TechniqueCard("DockerHub", "It is public repository for saving container images.", "dockerhub"));
		this.techniqueCardRepository.save(new TechniqueCard("NPM", "It is package management tool for frontend runtime.", "npm"));
		this.techniqueCardRepository.save(new TechniqueCard("Webpack", "It makes many static files single js file.", "webpack"));
		
		
		
	}
}
