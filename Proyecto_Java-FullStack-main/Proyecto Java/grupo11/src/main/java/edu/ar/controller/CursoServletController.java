package edu.ar.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.ar.data.CursoDAO;
import edu.ar.model.Curso;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Map;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@WebServlet("/cursos")

public class CursoServletController extends HttpServlet {
    static Logger logger = LoggerFactory.getLogger(CursoServletController.class);
    List<Curso> listaCursos = new ArrayList<>();
    ObjectMapper mapper = new ObjectMapper();


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String route = req.getParameter("action");
        logger.info("route : " + route);
        switch (route) {
            case "getAll"-> {
                res.setContentType("application/json; charset=UTF-8");
                listaCursos = CursoDAO.obtener();
                logger.info("Dentro de getAll : " + listaCursos.size());
                //transformo en json y lo envio
                mapper.writeValue(res.getWriter(), listaCursos);
                logger.info(mapper.toString());
            }
        
            default -> {
                res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                res.getWriter().write("Parámetro no válido");
            }
        }
    }

    //En el doPost enviamos los datos del formulario a Java para que los
    //inserte en la base de datos.
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        //String route = req.getParameter("action");
        String route = "add";
        logger.info("Dentro del doPost()");
        logger.info("route : " + route);
        logger.info("req : " + req);
        logger.info("req : " + req.getParameter("nombre"));
        switch(route) {
            case "add"-> {
                try {
                    String nombre = req.getParameter("nombre");
                    String descripcion = req.getParameter("descripcion");
                    String instructor = req.getParameter("instructor");
                    int valoracion = Integer.parseInt(req.getParameter("valoracion"));
                    String img = req.getParameter("img");
                    logger.info("Nombre: " + nombre + ", Descripción: " + descripcion + ", Valoración: " + valoracion + ", Instructor: " + instructor + ", Img: " + img);

                    Curso newCurso = new Curso(nombre, descripcion, valoracion, instructor, img);
                    CursoDAO.insertar(newCurso);

                    res.setContentType("application/json; charset=UTF-8");
                    Map<String, String> response = new HashMap<>();
                    response.put("message", "Curso guardado exitosamente!!!");
                    mapper.writeValue(res.getWriter(), response);
                } catch (NumberFormatException e) {
                    logger.error("Error de formato de número: ", e);
                    res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                    res.getWriter().write("Error de formato de número.");
                } catch (Exception e) {
                    logger.error("Error: ", e);
                    res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    res.getWriter().write("Error interno del servidor.");
                }
            }
        }
    }
}
