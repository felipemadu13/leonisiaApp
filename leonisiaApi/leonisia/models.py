from django.db import models

class Servico(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(blank=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nome
