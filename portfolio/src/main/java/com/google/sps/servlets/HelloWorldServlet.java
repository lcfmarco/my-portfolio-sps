package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/MovieQuotes")
public class HelloWorldServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> quotesArray = new ArrayList<String>();
    quotesArray.add("“Carpe diem. Seize the day, boys. Make your lives extraordinary.” - Dead Poets Society");
    quotesArray.add("“Just keep swimming.” -Finding Nemo");
    quotesArray.add("“Jessica, only child, Illinois, Chicago.” - Parasite");

    String json = convertToJsonUsingGson(quotesArray);

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJsonUsingGson(ArrayList<String> newString) {
      Gson gson = new Gson();
      String json = gson.toJson(newString);
      return json;

  }

}
