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
		this.technologyCardRepository.save(new TechnologyCard("React", "It used for frontend"));
		this.technologyCardRepository.save(new TechnologyCard("Spring", "It used for backend"));
		
		for (int i = 0; i < 10; i++) {
			this.technologyCardRepository.save(new TechnologyCard("dummy Data" + (i + 1), "dummy Description" + (i + 1)));	//dummy
		}
		
		//techniques
		this.techniqueCardRepository.save(new TechniqueCard("REST API", "It is designed by REST API"));
		this.techniqueCardRepository.save(new TechniqueCard("SCALABLE", "It is designed for horizontal scalable"));
		
		for (int i = 0; i < 10; i++) {
			this.techniqueCardRepository.save(new TechniqueCard("dummy Data" + (i + 1), "dummy Description" + (i + 1)));	//dummy
		}
		
	}
}
