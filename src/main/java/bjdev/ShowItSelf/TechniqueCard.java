package bjdev.ShowItSelf;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TechniqueCard{
	private @Id @GeneratedValue Long id;
	private String name;
	private String description;
	
	private TechniqueCard() {}
	
	public TechniqueCard(String name, String description) {
		this.name = name;
		this.description = description;
	}
	
	@Override
	public boolean equals(Object o) {
		if(this == o)
			return true;
		if(o == null || getClass() != o.getClass())
			return false;
		TechniqueCard techniqueCard = (TechniqueCard) o;
		return Objects.equals(id, techniqueCard.id) &&
				Objects.equals(name, techniqueCard.name) &&
				Objects.equals(description, techniqueCard.description);
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
		return "TechniqueCard [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
}
