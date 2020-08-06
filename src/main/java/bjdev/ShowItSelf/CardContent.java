package bjdev.ShowItSelf;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CardContent {
	private @Id @GeneratedValue Long id;
	private String name;
	private String description;
	
	private CardContent() {}
	
	public CardContent(String name, String description) {
		this.name = name;
		this.description = description;
	}
	
	@Override
	public boolean equals(Object o) {
		if(this == o)
			return true;
		if(o == null || getClass() != o.getClass())
			return false;
		CardContent cardContent = (CardContent) o;
		return Objects.equals(id, cardContent.id) &&
				Objects.equals(name, cardContent.name) &&
				Objects.equals(description, cardContent.description);
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
		return "CardContent [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
	
	
}
