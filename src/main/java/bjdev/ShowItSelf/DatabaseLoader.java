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
	
	@Autowired
	public DatabaseLoader(TechnologyCardRepository technologyCardRepository) {
		this.technologyCardRepository = technologyCardRepository;
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
		this.technologyCardRepository.save(new TechnologyCard("Kubernetes", "Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.", "kubernetes"));
		
		//techniques
		this.technologyCardRepository.save(new TechnologyCard("REST API", "This project is using REST API.", "rest"));
		this.technologyCardRepository.save(new TechnologyCard("HATEOAS", "HATEOAS(Hypermedia as the Engine of Application State) is used for providing other links.", "hateoas"));
		this.technologyCardRepository.save(new TechnologyCard("EC2", "t2.micro(1 vcpu and 1GB RAM) instance was used at this time. It will be huge instance for changing to kubernetes.", "ec2"));
		this.technologyCardRepository.save(new TechnologyCard("Github", "I think github which is hosted by microsoft is center of open sources. It provides a lot of awesome features for developers.", "github"));
		this.technologyCardRepository.save(new TechnologyCard("DockerHub", "Github saves code. Like this, Dockerhub saves docker images.", "dockerhub"));
		this.technologyCardRepository.save(new TechnologyCard("NPM", "NPM(Node Package Manager) is package management tool for frontend.", "npm"));
		this.technologyCardRepository.save(new TechnologyCard("Webpack", "Wepack makes many static files single js file. Also it optimizes and makes the js file have less size.", "webpack"));
		this.technologyCardRepository.save(new TechnologyCard("Github Action", "Build is automatically occurred on Azure which hosted by microsoft Whenever pushed to master branch", "githubaction"));
		this.technologyCardRepository.save(new TechnologyCard("K3s", "K3s is lightweight kubernetes.", "k3s"));
		this.technologyCardRepository.save(new TechnologyCard("HTTPS", "\'Let's Encrypt\' is a kind of certificate agency and it provides free certificate.", "letsencrypt"));
		this.technologyCardRepository.save(new TechnologyCard("Asciidoctor", "Asciidoctor is simular to mark down, but it has more compatable features such as making https page and binding pages. Doc page is generated by asciidoctor.", "asciidoctor"));
		this.technologyCardRepository.save(new TechnologyCard("Nginx", "Nginx is web server like Apache. It provides lots of features including load balancing. It works as reverse-proxy and user only meet nginx.", "nginx"));
		
	}
}
