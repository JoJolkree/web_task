using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PayService.Model.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountNumber = table.Column<string>(nullable: true),
                    Amount = table.Column<int>(nullable: false),
                    BankNumber = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    IndividualNumber = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PurposeOfPayment = table.Column<string>(nullable: true),
                    Vat = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Amount = table.Column<int>(nullable: false),
                    CardNumber = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    MonthExpired = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requests");

            migrationBuilder.DropTable(
                name: "Transactions");
        }
    }
}
