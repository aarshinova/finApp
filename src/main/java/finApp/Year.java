package finApp;

public class Year {
    private String id;
    private String year;

    public String getId() {
        return id;
    }

    public Year(String id, String year) {
        this.id = id;
        this.year = year;
    }

    public void setId(String id) {
        this.id = id;

    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}