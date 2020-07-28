package bjdev.ShowItSelf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/*
 * this class will use temporally.
 * */

@Component
public class DatabaseLoader implements CommandLineRunner{
	private final CardContentRepository repository;
	
	@Autowired
	public DatabaseLoader(CardContentRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public void run(String... strings) throws Exception{
		this.repository.save(new CardContent("React", "It used for frontend"));
		this.repository.save(new CardContent("Spring", "It used for backend"));
		
		for (int i = 0; i < 10; i++) {
			this.repository.save(new CardContent("Data" + (i + 1), "Description" + (i + 1)));
		}
	}
}
