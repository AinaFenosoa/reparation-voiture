<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('prenom')->after('id');
            $table->string('nom')->after('prenom');
            $table->string('telephone')->nullable()->after('email');
            $table->text('adresse')->nullable()->after('telephone');
            // ⚠️ Ne pas ajouter timestamps() ici car il existe déjà
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['prenom', 'nom', 'telephone', 'adresse']);
        });
    }
};