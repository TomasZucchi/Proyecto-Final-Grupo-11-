package edu.ar.data;

import static edu.ar.data.Conexion.close;
import static edu.ar.data.Conexion.getConexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import edu.ar.model.Curso;

public class CursoDAO {
    private static final String SQL_SELECT = "SELECT * FROM registro_cursos.cursos";
    private static final String SQL_INSERT = "INSERT INTO registro_cursos.cursos (nombre_curso, descripcion, valoracion, instructor, imagen_url) VALUES (?,?,?,?,?)";

    public static List<Curso> obtener() {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        Curso curso = null;
        List<Curso> cursos = new ArrayList<>();

        //bloque try catch finally
        try {
            conn = getConexion();
            ps = conn.prepareStatement(SQL_SELECT);
            rs = ps.executeQuery();
            
            //Itero los resultados devueltos por el select
            while (rs.next()) {
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre_curso");
                String descripcion = rs.getString("descripcion");
                String instructor = rs.getString("instructor");
                int valoracion = rs.getInt("valoracion");
                String img = rs.getString("imagen_url");

                curso = new Curso(id, nombre, descripcion, valoracion, instructor, img);
                cursos.add(curso);
            }
        } catch (Exception e) {
            e.printStackTrace(System.out);
        } finally {
            try {
                close(rs);
                close(ps);
                close(conn);
            } catch (Exception e) {
                e.printStackTrace(System.out);
            }
        }
        return cursos;
    }

    //Método para insertar un curso
    public static int insertar(Curso curso) {
        Connection conn = null;
        PreparedStatement ps = null;
        int registros = 0;
        try {
            conn = getConexion();
            ps = conn.prepareStatement(SQL_INSERT);
            ps.setString(1, curso.getNombre());
            ps.setString(2, curso.getDescripcion());
            ps.setInt(3, curso.getValoracion());
            ps.setString(4, curso.getInstructor());
            ps.setString(5, curso.getImg());
            registros = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace(System.out);
        }
        finally {
            try {
                close(ps);
                close(conn);
            } catch (SQLException e) {
                e.printStackTrace(System.out);
            }
        }
        return registros;
    }

}
