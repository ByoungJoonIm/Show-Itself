package bjdev.ShowItSelf;

import javax.persistence.Entity;

@Entity
public class TechnologyCard extends CardContent{
	public TechnologyCard(String name, String description) {
		super(name, description);
	}
}