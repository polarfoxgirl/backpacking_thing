FROM python:3.8

LABEL maintainer="catmeggy@gmail.com"
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 8080

ENTRYPOINT ["python"]
CMD ["main_service.py"]