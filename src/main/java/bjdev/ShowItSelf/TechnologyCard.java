package bjdev.ShowItSelf;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TechnologyCard {
	private @Id @GeneratedValue Long id;
	private String name;
	private String description;
	
	private TechnologyCard() {}
	
	public TechnologyCard(String name, String description) {
		this.name = name;
		this.description = description;
	}
	
	@Override
	public boolean equals(Object o) {
		if(this == o)
			return true;
		if(o == null || getClass() != o.getClass())
			return false;
		TechnologyCard technologyCard = (TechnologyCard) o;
		return Objects.equals(id, technologyCard.id) &&
				Objects.equals(name, technologyCard.name) &&
				Objects.equals(description, technologyCard.description);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, name, description);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "TechnologyCard [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
}