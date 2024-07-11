package edu.ar.model;

public class Curso {
    //atributos de clase
    private int id;
    private String nombre;
    private String descripcion;
    private int valoracion;
    private String instructor;
    private String img;


    //constructores
    public Curso(int id, String nombre, String descripcion, int valoracion, String instructor, String img) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valoracion = valoracion;
        this.instructor = instructor;
        this.img = img;
    }

    public Curso(String nombre, String descripcion, int valoracion, String instructor, String img) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valoracion = valoracion;
        this.instructor = instructor;
        this.img = img;
    }

    //métodos getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getValoracion() {
        return valoracion;
    }

    public void setValoracion(int valoracion) {
        this.valoracion = valoracion;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    //métodos personalizados
    @Override
    public String toString() {
        return "Curso [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", valoracion=" + valoracion
                + ", instructor=" + instructor + ", img=" + img + "]";
    }
    
}
