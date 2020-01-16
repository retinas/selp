using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "DeviceNumber",
                table: "Devices",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ExpiryDate",
                table: "DeviceContentSubscriptions",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "DeviceContentSubscriptions",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartingDate",
                table: "DeviceContentSubscriptions",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "AdditionalInfo",
                table: "Contents",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ContentCategoryId",
                table: "Contents",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ContentDifficultyId",
                table: "Contents",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Instructions",
                table: "Contents",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Contents",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserCompetence",
                table: "Contents",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CompanyName",
                table: "Companies",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "ContentCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastModifiedBy = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Code = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContentDifficulties",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastModifiedBy = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Code = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentDifficulties", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserModes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastModifiedBy = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Code = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContentUserModes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastModifiedBy = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: true),
                    ContentId = table.Column<int>(nullable: false),
                    UserModeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentUserModes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContentUserModes_Contents_ContentId",
                        column: x => x.ContentId,
                        principalTable: "Contents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ContentUserModes_UserModes_UserModeId",
                        column: x => x.UserModeId,
                        principalTable: "UserModes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Devices_DeviceNumber",
                table: "Devices",
                column: "DeviceNumber",
                unique: true,
                filter: "[DeviceNumber] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Contents_ContentCategoryId",
                table: "Contents",
                column: "ContentCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Contents_ContentDifficultyId",
                table: "Contents",
                column: "ContentDifficultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_CompanyName",
                table: "Companies",
                column: "CompanyName",
                unique: true,
                filter: "[CompanyName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ContentUserModes_ContentId",
                table: "ContentUserModes",
                column: "ContentId");

            migrationBuilder.CreateIndex(
                name: "IX_ContentUserModes_UserModeId",
                table: "ContentUserModes",
                column: "UserModeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contents_ContentCategories_ContentCategoryId",
                table: "Contents",
                column: "ContentCategoryId",
                principalTable: "ContentCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Contents_ContentDifficulties_ContentDifficultyId",
                table: "Contents",
                column: "ContentDifficultyId",
                principalTable: "ContentDifficulties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contents_ContentCategories_ContentCategoryId",
                table: "Contents");

            migrationBuilder.DropForeignKey(
                name: "FK_Contents_ContentDifficulties_ContentDifficultyId",
                table: "Contents");

            migrationBuilder.DropTable(
                name: "ContentCategories");

            migrationBuilder.DropTable(
                name: "ContentDifficulties");

            migrationBuilder.DropTable(
                name: "ContentUserModes");

            migrationBuilder.DropTable(
                name: "UserModes");

            migrationBuilder.DropIndex(
                name: "IX_Devices_DeviceNumber",
                table: "Devices");

            migrationBuilder.DropIndex(
                name: "IX_Contents_ContentCategoryId",
                table: "Contents");

            migrationBuilder.DropIndex(
                name: "IX_Contents_ContentDifficultyId",
                table: "Contents");

            migrationBuilder.DropIndex(
                name: "IX_Companies_CompanyName",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "ExpiryDate",
                table: "DeviceContentSubscriptions");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "DeviceContentSubscriptions");

            migrationBuilder.DropColumn(
                name: "StartingDate",
                table: "DeviceContentSubscriptions");

            migrationBuilder.DropColumn(
                name: "AdditionalInfo",
                table: "Contents");

            migrationBuilder.DropColumn(
                name: "ContentCategoryId",
                table: "Contents");

            migrationBuilder.DropColumn(
                name: "ContentDifficultyId",
                table: "Contents");

            migrationBuilder.DropColumn(
                name: "Instructions",
                table: "Contents");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Contents");

            migrationBuilder.DropColumn(
                name: "UserCompetence",
                table: "Contents");

            migrationBuilder.AlterColumn<string>(
                name: "DeviceNumber",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CompanyName",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
