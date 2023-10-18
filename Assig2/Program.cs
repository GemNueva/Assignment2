using Assig2.Data;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

// Create Application
var builder = WebApplication.CreateBuilder(args);
Debug.SetActive(builder);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddEndpointsApiExplorer();

// Add Swagger documentation UI Page
//builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(c =>
{
var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
c.IncludeXmlComments(xmlPath);
});

// Add the Expiations DB Context
builder.Services.AddDbContext<EnvDataContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("EnvData") ??
throw new InvalidOperationException("Connection string for Expiation Context not found!")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();

app.UseRouting();

// enable Cross-Origin Resource Sharing for ReactJS app
app.UseCors(b =>
{
    b.AllowAnyMethod();
    b.AllowAnyOrigin();
    b.AllowAnyHeader();
});

app.UseAuthorization();

// Don't Change this - using WebAPIs and Action Routing instead :)
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
