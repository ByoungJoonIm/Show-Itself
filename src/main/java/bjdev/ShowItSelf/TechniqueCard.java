package bjdev.ShowItSelf;

import javax.persistence.Entity;

@Entity
public class TechniqueCard extends CardContent{
	public TechniqueCard(String name, String description) {
		super(name, description);
	}
}
