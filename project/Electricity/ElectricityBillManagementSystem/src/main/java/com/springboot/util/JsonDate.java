package com.springboot.util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class JsonDate extends StdDeserializer<Date>
{
	private static final long serialVersionUID=1;
	
	public JsonDate()
	{
		this(null);
	}
	
	public JsonDate(Class<?> clazz)
	{
		super(clazz);
	}

	@Override
	public Date deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException
	{
		String date=jsonParser.getText();
		try
		{
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			return sdf.parse(date);
		}
		catch(ParseException e)
		{
			return null;
		}
	}
}
