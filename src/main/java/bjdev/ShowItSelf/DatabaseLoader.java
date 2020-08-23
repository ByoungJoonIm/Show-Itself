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
		this.technologyCardRepository.save(new TechnologyCard("AWS", "Cloud platforms provide a lot of resources including vps, network and storage by on-demand.", "aws"));
		this.technologyCardRepository.save(new TechnologyCard("Docker", "Image build will be occurred automatically when I release new version in github.", "docker"));
		this.technologyCardRepository.save(new TechnologyCard("Git", "VMS(Version Management System) is very important to manage source and collaborate with co-workers. It also provide github action.", "git"));
		this.technologyCardRepository.save(new TechnologyCard("Gradle", "Gradle is modern build tool and it is faster than maven(Referenced by gradle).", "gradle"));
		this.technologyCardRepository.save(new TechnologyCard("NodeJs", "Nodejs provides frontend runtime and modules for wepack.", "nodejs"));
		
		
		//techniques
		this.techniqueCardRepository.save(new TechniqueCard("REST API", "This project is using REST API.", "rest"));
		this.techniqueCardRepository.save(new TechniqueCard("HATEOAS", "HATEOAS(Hypermedia as the Engine of Application State) is used for providing other links.", "hateoas"));
		this.techniqueCardRepository.save(new TechniqueCard("EC2", "t2.micro(1 vcpu and 1GB RAM) instance was used at this time. It will be huge instance for changing to kubernetes.", "ec2"));
		this.techniqueCardRepository.save(new TechniqueCard("Github", "I think github which is hosted by microsoft is center of open sources. It provides a lot of awesome features for developers.", "github"));
		this.techniqueCardRepository.save(new TechniqueCard("DockerHub", "Github saves code. Like this, Dockerhub saves docker images.", "dockerhub"));
		this.techniqueCardRepository.save(new TechniqueCard("NPM", "NPM(Node Package Manager) is package management tool for frontend.", "npm"));
		this.techniqueCardRepository.save(new TechniqueCard("Webpack", "Wepack makes many static files single js file. Also it optimizes and makes the js file have less size.", "webpack"));
		this.techniqueCardRepository.save(new TechniqueCard("Github Action", "Build is automatically occurred on Azure which hosted by microsoft Whenever pushed to master branch", "githubaction"));
		
	}
}
