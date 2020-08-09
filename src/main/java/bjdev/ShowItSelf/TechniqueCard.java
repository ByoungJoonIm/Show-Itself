package bjdev.ShowItSelf;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TechniqueCard{
	private @Id @GeneratedValue Long id;
	private String name;
	private String description;
	private @JsonIgnore String iconName;
	
	private TechniqueCard() {}
	
	public TechniqueCard(String name, String description) {
		this(name, description, "not-found");
	}
	
	public TechniqueCard(String name, String description, String iconName) {
		this.name = name;
		this.description = description;
		this.iconName = iconName;
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
				Objects.equals(description, techniqueCard.description) &&
				Objects.equals(iconName, techniqueCard.iconName);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, name, description, iconName);
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
	
	
	public String getIconName() {
		return iconName;
	}

	public void setIconName(String iconName) {
		this.iconName = iconName;
	}

	@Override
	public String toString() {
		return "TechniqueCard [id=" + id + ", name=" + name + ", description=" + description + ", iconName=" + iconName
				+ "]";
	}
}
